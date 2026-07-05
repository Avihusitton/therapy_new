// [Category A: UI / Design / Layout]
// Blog listing page — hidden from public (noindex)
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, Tag } from 'lucide-react';

export default function BlogIndex() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    fetch('/api/blog-articles')
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch articles');
        return r.json();
      })
      .then(data => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('[blog] Error fetching articles:', err);
        setError('לא הצלחנו לטעון את המאמרים');
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      return new Date(dateStr).toLocaleDateString('he-IL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return '';
    }
  };

  return (
    <Layout>
      <SEO
        title="בלוג | אביהו סיטון — פסיכותרפיסט"
        description="מאמרים בנושאי פסיכותרפיה, זוגיות, התפתחות אישית ובריאות הנפש."
        canonical="/blog"
        noindex={true}
      />

      <section className="py-16 bg-[#FDF8F0] min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#A2673E]/10 text-[#A2673E] px-4 py-2 rounded-full text-sm mb-4">
              <BookOpen size={16} />
              <span>בלוג</span>
            </div>
            <h1 className="text-4xl sm:text-5xl text-[#4C4A49] font-bold">
              מאמרים ותובנות
              <div className="w-16 h-1 bg-brand-primary mx-auto mt-3 rounded-full" />
            </h1>
            <p className="text-lg text-[#6B6967] mt-4 max-w-2xl mx-auto">
              מחשבות, כלים ותובנות מעולם הפסיכותרפיה וההתפתחות האישית
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-8 h-8 border-2 border-[#A2673E] border-t-transparent rounded-full animate-spin" />
              <p className="text-[#6B6967] mt-4">טוען מאמרים...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <p className="text-[#c0392b]">{error}</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-20">
              <BookOpen size={48} className="mx-auto text-[#D3C1B1] mb-4" />
              <p className="text-[#6B6967] text-lg">עוד אין מאמרים. בקרוב!</p>
            </div>
          )}

          {/* Articles Grid */}
          {!loading && !error && articles.length > 0 && (
            <div className="space-y-6">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${article.slug}`}>
                    <div className="bg-white rounded-xl shadow-sm border border-[#D3C1B1]/10 hover:shadow-md transition-shadow duration-300 overflow-hidden group cursor-pointer">
                      <div className="flex flex-col md:flex-row">
                        {/* Featured Image */}
                        {article.featured_image_url && (
                          <div className="md:w-64 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                            <img
                              src={article.featured_image_url}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="p-6 flex-1">
                          <h2 className="text-xl md:text-2xl font-bold text-[#4C4A49] mb-2 group-hover:text-[#A2673E] transition-colors">
                            {article.title}
                          </h2>

                          {article.meta_description && (
                            <p className="text-[#6B6967] mb-4 leading-relaxed line-clamp-2">
                              {article.meta_description}
                            </p>
                          )}

                          <div className="flex flex-wrap items-center gap-4 text-sm text-[#9B9896]">
                            {article.published_at && (
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {formatDate(article.published_at)}
                              </span>
                            )}
                            {article.author && (
                              <span className="flex items-center gap-1">
                                <User size={14} />
                                {article.author}
                              </span>
                            )}
                          </div>

                          {/* Tags */}
                          {article.tags && article.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {article.tags.slice(0, 4).map((tag, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1 bg-[#A2673E]/5 text-[#A2673E] px-2 py-1 rounded-full text-xs"
                                >
                                  <Tag size={10} />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
