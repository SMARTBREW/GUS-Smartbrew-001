import React from 'react';
import SEOHead from './SEOHead';
import PageLayout from './PageLayout';
import { Calendar, User, Tag } from 'lucide-react';

interface BlogPostProps {
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  excerpt: string;
  slug: string;
  featuredImage?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  author,
  date,
  tags,
  excerpt,
  slug,
  featuredImage
}) => {
  // Blog post structured data for SEO (FREE!)
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": excerpt,
    "author": {
      "@type": "Organization",
      "name": "Gramin Utthan Samiti"
    },
          "publisher": {
        "@type": "Organization",
        "name": "Gramin Utthan Samiti",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gusindia.org/logo.png"
        }
      },
    "datePublished": date,
    "dateModified": date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://gusindia.org/blog/${slug}`
    },
    "keywords": tags.join(", "),
    ...(featuredImage && {
      "image": {
        "@type": "ImageObject",
        "url": `https://gusindia.org${featuredImage}`
      }
    })
  };

  return (
    <PageLayout>
      <SEOHead
        title={title}
        description={excerpt}
        keywords={tags.join(", ")}
        canonicalUrl={`/blog/${slug}`}
        ogType="article"
        ogImage={featuredImage}
        structuredData={blogPostSchema}
      />
      
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-normal text-gray-800 mb-6 leading-tight">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 text-sm space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(date).toLocaleDateString('en-IN')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm"
                >
                  <Tag className="h-3 w-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
            
            {/* Featured Image */}
            {featuredImage && (
              <img
                src={featuredImage}
                alt={title}
                className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg mb-8"
              />
            )}
          </header>
          
          {/* Article Content */}
          <div 
            className="prose prose-lg prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
          {/* Call to Action */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Support Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              Your contribution helps us continue our work in rural development and community empowerment.
            </p>
            <a
              href="/donate"
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <span>Donate Now</span>
            </a>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPost;
