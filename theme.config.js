const YEAR = new Date().getFullYear()

export default {
  components: {
    h2: ({ children }) => (
      <h1 style={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundImage: 'linear-gradient(90deg,#FFFFFF,#f5b402)',
      }}
      >
        {children}
      </h1>
    )
    
  },
  footer: (
    <footer>
      <small>
        <time>{2023}</time> © Sneha Michelle.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
  
}
