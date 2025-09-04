import styles from './GradientBlur.module.css';

export default function GradientBlur() {
  return (
    <>
      {/* Left Side Progressive Blur */}
      <div className={styles['gradient-blur-left']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      {/* Right Side Progressive Blur */}
      <div className={styles['gradient-blur-right']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
} 