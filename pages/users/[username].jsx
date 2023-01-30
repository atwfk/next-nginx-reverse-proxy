export default function Profile({ user }) {
  return <h1>Hello, {user}</h1>;
}

export function getServerSideProps(ctx) {
  return { props: { user: ctx.query.username } };
}
