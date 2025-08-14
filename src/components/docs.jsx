import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import Loading from "./loading";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function Docs() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPdfFiles() {
      setLoading(true);
      const { data, error } = await supabase.storage
        .from("doc") // اسم البكيت
        .list("", { limit: 100 });

      if (error) {
        console.error("خطأ في جلب الملفات:", error);
        return;
      }

      // فلترة الملفات لتكون فقط PDF
      const pdfOnly = data.filter((file) =>
        file.name.toLowerCase().endsWith(".pdf")
      );

      const pdfWithCovers = await Promise.all(
        pdfOnly.map(async (file) => {
          const { data: urlData } = supabase.storage
            .from("doc")
            .getPublicUrl(file.name);

          let coverImage = null;
          try {
            const pdf = await pdfjsLib.getDocument(urlData.publicUrl).promise;
            const page = await pdf.getPage(1);
            const viewport = page.getViewport({ scale: 1 });
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            await page.render({ canvasContext: context, viewport }).promise;
            coverImage = canvas.toDataURL();
          } catch (err) {
            console.error("خطأ في قراءة PDF:", err);
          }
          setLoading(false);

          return {
            name: file.name,
            url: urlData.publicUrl,
            cover: coverImage,
          };
        })
      );

      setPdfFiles(pdfWithCovers);
    }

    fetchPdfFiles();
  }, []);

  if (loading) {
    return <Loading/>
  }

  return (
    <div className="   w-full  h-auto">
      <h2 className="text-center p-10 text-red-600 text-2xl font-bold">📚 PDF Files</h2>

 
       
<div class=" sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2  lg:grid-cols-3 gap-6">
     {pdfFiles.map((file) => (
    <div class="group flex flex-col h-full bg-white border   border-gray-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl  ">
      <div class="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
        <img className="w-full h-full rounded-t-xl" src={file.cover} alt="" />
      </div>
      <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          Cyber Securety
        </span>
        <h3 class="text-xl break-words font-semibold text-black ">
          {file.name}
        </h3>
        <p class="mt-3 text-gray-500 dark:text-neutral-500">
          A software that develops products for software developers and developments.
        </p>
      </div>
      <div class="mt-auto rounded-b-xl flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 bg-white">
        <a class="w-full py-3 px-4 inline-flex justify-center items-center rounded-bl-xl gap-x-2 text-sm font-medium rounded-es-xl text-white rounded-br-xl   bg-blue-500   focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none    dark:hover:bg-blue-600 " href={file.url}>
          Read
        </a>

      </div>
    </div>

        ))}    </div>
    </div>
       </div>
     
  );
}