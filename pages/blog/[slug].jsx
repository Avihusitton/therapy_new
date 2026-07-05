// [Category A: UI / Design / Layout]
// Individual blog article page — hidden from public (noindex)
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Head from 'next/head';
import SEO from '@/components/SEO';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag, BookOpen } from 'lucide-react';

export default function BlogArticle() {
  const router = useRouter();
  const { slug } = router.query;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!slug) return;

    fetch(`/api/blog-articles?slug=${encodeURIComponent(slug)}`)
      .then(r => {
        if (r.status === 404) throw new Error('not-found');
        if (!r.ok) throw new Error('Failed to fetch article');
        return r.json();
      })
      .then(data => {
        setArticle(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message === 'not-found' ? 'המאמר לא נמצא' : 'שגיאה בטעינת המאמר');
        setLoading(false);
      });
  }, [slug]);

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

  // Loading state
  if (loading) {
    return (
      <Layout>
        <SEO
          title="טוען... | בלוג"
          description=""
          canonical={`/blog/${slug || ''}`}
          noindex={true}
        />
        <div className="min-h-screen bg-[#FDF8F0] flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-2 border-[#A2673E] border-t-transparent rounded-full animate-spin" />
            <p className="text-[#6B6967] mt-4">טוען מאמר...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Error / Not found
  if (error || !article) {
    return (
      <Layout>
        <SEO
          title="מאמר לא נמצא | בלוג"
          description=""
          canonical={`/blog/${slug || ''}`}
          noindex={true}
        />
        <div className="min-h-screen bg-[#FDF8F0] flex items-center justify-center">
          <div className="text-center">
            <BookOpen size={48} className="mx-auto text-[#D3C1B1] mb-4" />
            <h1 className="text-2xl text-[#4C4A49] font-bold mb-2">
              {error || 'המאמר לא נמצא'}
            </h1>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#A2673E] hover:underline mt-4"
            >
              <ArrowRight size={16} />
              חזרה לבלוג
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${article.title} | בלוג — אביהו סיטון`}
        description={article.meta_description || ''}
        canonical={`/blog/${article.slug}`}
        image={article.featured_image_url || undefined}
        noindex={true}
      />

      {/* Inject sanitized JSON-LD into head */}
      {article.json_ld && (
        <Head>
          <div dangerouslySetInnerHTML={{ __html: article.json_ld }} />
        </Head>
      )}

      <article className="min-h-screen bg-[#FDF8F0]">
        {/* Hero / Header */}
        <div className="bg-gradient-to-b from-[#F5EDE3] to-[#FDF8F0] py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#A2673E] hover:underline mb-6 text-sm"
              >
                <ArrowRight size={14} />
                חזרה למאמרים
              </Link>

              <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#4C4A49] font-bold leading-tight mb-4">
                {article.title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#9B9896] mb-6">
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
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 bg-[#A2673E]/10 text-[#A2673E] px-3 py-1 rounded-full text-xs"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Featured Image */}
        {article.featured_image_url && (
          <div className="max-w-3xl mx-auto px-6 -mt-2 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={article.featured_image_url}
                alt={article.title}
                className="w-full h-auto max-h-96 object-cover"
              />
            </motion.div>
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg max-w-none
              prose-headings:text-[#4C4A49] prose-headings:font-bold
              prose-p:text-[#4A4847] prose-p:leading-relaxed
              prose-a:text-[#A2673E] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#4C4A49]
              prose-ul:text-[#4A4847] prose-ol:text-[#4A4847]
              prose-blockquote:border-[#A2673E] prose-blockquote:bg-[#F5EDE3]/50
              prose-blockquote:rounded-lg prose-blockquote:px-6
              prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: article.content_html }}
          />

          {/* Divider */}
          <div className="my-12 flex items-center gap-4">
            <div className="flex-1 h-px bg-[#D3C1B1]/30" />
            <BookOpen size={20} className="text-[#D3C1B1]" />
            <div className="flex-1 h-px bg-[#D3C1B1]/30" />
          </div>

          {/* Back link */}
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#A2673E] text-white px-6 py-3 rounded-full hover:bg-[#8B5633] transition-colors"
            >
              <ArrowRight size={16} />
              חזרה לכל המאמרים
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
