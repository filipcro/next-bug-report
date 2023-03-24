import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const { query } = useRouter();
  console.log(query);

  return (
    <>
      <Link href="/blah/blah/blah">Some path</Link>
      {" | "}
      <Link href="/foo/bar">Other path</Link>

      <br style={{ marginBottom: 40 }} />

      Query parts:

      {query.parts ?
        <ul>
          {query.parts.map((part, index) => <li key={index}>{part}</li>)}
        </ul>
        : <i>No query parts on this route</i>}
    </>
  );
}
