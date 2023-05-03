import { useRouter } from "next/router";

export default function BoardPage() {
  const router = useRouter();

  return (
    <>
      <div>인녕하세요 여기는 게시판 동적페이지입니다.</div>
      <div>게시글 아이디 : {router.query.boardId}</div>
    </>
  );
}
