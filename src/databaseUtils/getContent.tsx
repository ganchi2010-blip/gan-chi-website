import { useEffect, useState } from "react";
import { ref, onValue, Unsubscribe } from "firebase/database";
import { db } from "../firebase-config";

export interface ContentItem {
  [key: string]: any; // Replace 'any' with your actual content structure
}

export function useContent(
  websiteRef: string = "pages",
  pageRef: string = "main-page",
  languageRef: string = "en"
): Record<string, ContentItem> {
  const [content, setContent] = useState<Record<string, ContentItem>>({});

  useEffect(() => {
    const contentRef = ref(
      db,
      `content/website-content/${websiteRef}/${pageRef}/${languageRef}`
    );

    const unsubscribe: Unsubscribe = onValue(contentRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        setContent(data); // Keep it as an object
      } else {
        setContent({});
      }
    });

    return () => unsubscribe();
  }, [websiteRef, pageRef, languageRef]);

  return content;
}
