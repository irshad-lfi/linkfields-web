import { Button } from 'antd';
import Layout from 'common/Layout/layout';
import { attributes, html } from '../content/home.md';

const Home = () => (
  <Layout>
    <h1>{attributes.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </p>
        <p>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </p>
      </form>
    </div>
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default Home;
