import React from 'react';
import styles from './blogs.module.scss';
import Typography from 'common/Typography';
import Image from 'next/legacy/image';
import blog_1 from '../../../public/images/blog_1.png';
import blog_2 from '../../../public/images/blog_2.png';
import blog_3 from '../../../public/images/blog_3.png';

const data = {
  tag: 'BLOG',
  title: 'We keep us with time',
  blogs: [
    {
      image: blog_1,
      fullwidth: true,
      tag: 'Blogs & insights',
      title:
        'AI in the Finance Sector : How to Benefit from Conversational AI?',
      desc: 'Human intelligence has been unparalleled for centuries now. With the newest developments in technology and science, Artificial Intelligence (AI) is rapidly becoming the closest thing to human thinking. From being a common man’s...',
      time: 'Dec 24 · 3 min read',
    },
    {
      tag: 'Blogs & insights',
      fullwidth: false,
      title: 'DT : How Digital Transformation Drives Customer Experience',
      time: 'Dec 24 · 3 min read',
    },
    {
      image: blog_2,
      fullwidth: false,
      tag: 'Blogs & insights',
      title:
        'AI in the Finance Sector : How to Benefit from Conversational AI?',
      time: 'Dec 24 · 3 min read',
    },
    {
      tag: 'Blogs & insights',
      fullwidth: false,
      title: 'Shorter Article Names: Why Not?',
      time: 'Dec 24 · 3 min read',
    },
    {
      image: blog_3,
      fullwidth: false,
      tag: 'Blogs & insights',
      title: 'DT : How Digital Transformation Drives Customer Experience',
      time: 'Dec 24 · 3 min read',
    },
  ],
};

const Blogs = () => {
  const first: any = data.blogs.filter((b) => b.fullwidth === true);
  const remaining = data.blogs.filter((b) => b.fullwidth === false);
  return (
    <Typography className={`${styles.container}`}>
      <div className={`${styles.tag_icon}`}>
        <div className={`${styles.circle}`}></div>
        <div className={`${styles.tag} lf-caption`}>{data.tag}</div>
      </div>
      <h2 className={`${styles.title}`}>{data.title}</h2>
      <div className={`${styles.blogs_container}`}>
        <div className={`${styles.firstBlog}`}>
          <div className={`${styles.image_con}`}>
            <Image src={blog_1} alt="blog" layout="fill" objectFit="cover" />
          </div>
          <div className={`${styles.content}`}>
            <h4 className={`${styles.title}`}>{first?.[0].title}</h4>
            <div className={`${styles.desc} lf-bd-md`}>{first?.[0].desc}</div>
          </div>
          <div className={`${styles.date} lf-btn`}>{first?.[0].time}</div>
        </div>
        <div className={`${styles.remaining}`}>
          {remaining.map((blog, id) => {
            return (
              <div className={`${styles.blog}`} key={id}>
                {blog.image ? (
                  <div className={`${styles.image_con}`}>
                    <Image
                      src={blog.image}
                      alt="blog"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ) : null}
                <h6 className={`${styles.title}`}>{blog.title}</h6>
                <div className={`${styles.time_tag}`}>
                  <div className={`${styles.time} lf-btn`}>{blog.time}</div>
                  <div className={`${styles.tag} lf-btn`}>{blog.tag}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Typography>
  );
};

export default Blogs;
