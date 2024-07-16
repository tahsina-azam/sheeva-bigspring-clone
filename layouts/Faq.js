// import { markdownify } from "@lib/utils/textConverter";

// function Faq({ data }) {
//   const { frontmatter } = data;
//   const { title, faqs } = frontmatter;
//   return (
//     <section className="section">
//       <div className="container">
//         {markdownify(title, "h1", "text-center font-normal")}
//         <div className="section row  -mt-6">
//           {faqs.map((faq, index) => (
//             <div key={index} className="col-12 mt-6 md:col-6">
//               <div className="p-12  shadow">
//                 <div className="faq-head relative">
//                   {markdownify(faq.title, "h4")}
//                 </div>
//                 {markdownify(faq.answer, "p", "faq-body mt-4")}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Faq;
import { useEffect, useRef, useState } from 'react';
import { markdownify } from "@lib/utils/textConverter";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;

  // Ref for the FAQ items
  const [inView, setInView] = useState([]);
  const ref = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prev) => [...prev, entry.target]);
          }
        });
      },
      { threshold: 0.1 }
    );

    ref.current.forEach((item) => observer.observe(item));

    return () => {
      ref.current.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row -mt-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="col-12 mt-6 md:col-6"
              ref={(el) => (ref.current[index] = el)}
            >
              <div
                className={`p-12 shadow faq-item ${
                  inView.includes(ref.current[index]) ? 'faq-item' : ''
                }`}
              >
                <div className="faq-head relative">
                  {markdownify(faq.title, "h4")}
                </div>
                {markdownify(faq.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;

