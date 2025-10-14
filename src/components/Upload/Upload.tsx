import { useState, useRef } from "react";
import styles from "./Upload.module.css";
import Image from "next/image";

export default function Upload() {
  const refContainer = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleClick = () => {
    refContainer.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };
  return (
    <>
      <div className={styles.wrapper} onClick={handleClick}>
        <input
          onChange={handleChange}
          multiple
          ref={refContainer}
          type="file"
          hidden
        />
        <p>Нажать для загрузки</p>
      </div>

      {files.length > 0 && (
        <div className={styles.files}>
          {files.map((file, index) => {
            const imageUrl = URL.createObjectURL(file);
            return (
              <div key={index} className={styles.file}>
                <Image
                  width={100}
                  height={100}
                  src={imageUrl}
                  alt={file.name}
                  className={styles.image}
                  onLoad={() => {
                    URL.revokeObjectURL(imageUrl);
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
