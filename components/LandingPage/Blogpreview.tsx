'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogPreview = () => {
  const blogs = [
    {
      category: 'AI & Healthcare',
      title: 'How AI is Revolutionizing Personal Health Management',
      excerpt: 'Discover how artificial intelligence is transforming the way we understand and manage our health data.',
      author: 'Dr. Priya Sharma',
      date: 'Dec 10, 2025',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      gradient: 'from-[#0e9e6e] to-[#093627]'
    },
    {
      category: 'Patient Stories',
      title: '5 Ways Digital Health Records Saved My Life',
      excerpt: 'A patient shares their journey of how consolidated health records led to early detection and better outcomes.',
      author: 'Ramesh Thapa',
      date: 'Dec 8, 2025',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      gradient: 'from-[#093627] to-[#0e9e6e]'
    },
    {
      category: 'Technology',
      title: 'Understanding HIPAA Compliance in Digital Health',
      excerpt: 'What you need to know about data security and privacy in modern healthcare applications.',
      author: 'Ayush Maharjan',
      date: 'Dec 5, 2025',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      gradient: 'from-[#0e9e6e] to-[#093627]'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#b4decf]/10 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b4decf]/20 rounded-full text-[#093627] font-medium text-sm">
              <span className="w-2 h-2 bg-[#0e9e6e] rounded-full"></span>
              Latest Insights
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#093627]">
              From Our{' '}
              <span className="bg-gradient-to-r from-[#0e9e6e] to-[#093627] bg-clip-text text-transparent">
                Blog
              </span>
            </h2>
            
            <p className="text-xl text-[#093627]/70">
              Stay informed with the latest trends, tips, and stories from the world of digital healthcare.
            </p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 text-[#0e9e6e] font-semibold hover:gap-3 transition-all group"
          >
            View All Posts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-[#b4decf]/30 hover:border-[#0e9e6e]/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#b4decf]/20 to-[#0e9e6e]/10 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-80 group-hover:opacity-60 transition-opacity`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#093627]">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-[#093627] group-hover:text-[#0e9e6e] transition-colors line-clamp-2">
                  <Link href="/blogs" className="hover:underline">
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-[#093627]/70 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#b4decf]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0e9e6e] to-[#093627] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {blog.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#093627]">{blog.author}</p>
                      <p className="text-xs text-[#093627]/60">{blog.date}</p>
                    </div>
                  </div>

                  <span className="text-xs text-[#093627]/60 font-medium">
                    {blog.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-br from-[#0e9e6e] to-[#093627] rounded-3xl p-8 lg:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full font-medium text-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Newsletter
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold">
              Stay Updated with Health Insights
            </h3>

            <p className="text-white/80 text-lg">
              Get the latest articles, tips, and updates delivered straight to your inbox. Join our community of health-conscious readers.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-[#093627] font-semibold rounded-2xl hover:bg-[#b4decf] transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-white/60">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;