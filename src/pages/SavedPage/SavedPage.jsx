import { useEffect, useState } from "react";
import { index } from "../../utils/savedService";
import SavedVerseList from "../../components/SavedVerseList/SavedVerseList";

export default function SavedPage() {
  const [verses, setVerses] = useState([]);
  useEffect(() => {
    getVersesArray();
  }, []);

  const getVersesArray = async () => {
    try {
      const versesObj = await index();
      console.log(versesObj);
      setVerses(versesObj.verses);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-12">
      <h1 className="m-8 text-3xl text-center text-white">My Saved Verses</h1>
      <SavedVerseList verses={verses} setVerses={setVerses} />
    </div>
  );
}
