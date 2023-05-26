import useTitle from "../../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="max-w-screen-xl mx-auto">
      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box mt-14"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            Access Token: An access token is a credential that is issued by an
            authentication server after a user successfully logs in or
            authenticates. It represents the user's authorization to access
            protected resources or perform specific actions on a server. Access
            tokens are typically short-lived and have an expiration time. Once
            expired, they need to be renewed or refreshed. Access tokens are
            usually included in the authorization header of API requests as a
            means of authentication.
          </p>
          <p className="my-5">
            Refresh Token: A refresh token is a long-lived credential that is
            also issued by an authentication server alongside the access token.
            It is used to obtain a new access token once the current access
            token expires, without requiring the user to re-authenticate.
          </p>
          <p>
            Token Flow and Storage: During authentication, the server verifies
            the user's credentials and generates an access token and a refresh
            token. The access token is typically returned in the response to the
            authentication request and should be stored in memory or a secure
            storage mechanism (e.g., browser memory or sessionStorage). The
            refresh token is securely stored on the client-side, usually as an
            HTTP-only cookie{" "}
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box mt-14"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p className="my-5">
            SQL: SQL databases use a structured data model based on tables with
            predefined schemas. Data is organized into rows and columns, and
            relationships between tables are established using primary and
            foreign keys. NoSQL: NoSQL databases use a variety of data models,
            such as key-value, document, columnar, and graph. They provide
            flexibility by allowing the storage of unstructured or
            semi-structured data without enforcing a predefined schema.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box mt-14"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p className="my-5">
            MongoDB's aggregate is a powerful feature that allows for advanced
            data aggregation and analysis operations. It provides a flexible way
            to process and transform data within MongoDB collections. The
            aggregate pipeline consists of multiple stages, where each stage
            performs a specific operation on the input documents and passes the
            results to the next stage. These stages can include operations like
            filtering, sorting, grouping, projecting, joining, and calculating
            aggregate values. The pipeline supports a wide range of operators
            and expressions to shape the data according to specific
            requirements. By leveraging the aggregate framework, MongoDB users
            can perform complex data manipulations and generate insightful
            reports or analytics from their collections.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box mt-14"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p className="my-5">
            NestJS provides a more structured and opinionated approach, which
            can make it easier to build complex APIs with proper separation of
            concerns. Express, on the other hand, is more lightweight and
            flexible, which makes it a popular choice for simple or small-scale
            APIs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
