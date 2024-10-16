import st from "./page.module.css";
import Image from "next/image";

export function Headline() {
    return (
      <div>
        <h1 className={st.h1}>Mexican Food Generator</h1>
        <Image
          src="/Mexico.jpeg"  
          width={100}
          height={100}
          alt="Mexico"
        />
      </div>
    );
  }
