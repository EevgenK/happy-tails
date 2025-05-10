// import Head from 'next/head';
// import styles from '@/styles/Home.module.css';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import groomAnimation from '@/public/animations/grooming.json';

// export default function Home() {
//
//       <main className={styles.main}>
//         <motion.section
//           className={styles.hero}
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className={styles.title}>Happy Tails Grooming</h1>
//           <p className={styles.subtitle}>
//             Професійні курси грумінгу для майбутніх експертів
//           </p>
//         </motion.section>

//         <motion.section
//           className={styles.about}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           <h2>Навчіться стригти собак професійно</h2>
//           <p>
//             Наші курси — це поєднання теорії, практики та любові до тварин. Ви
//             отримаєте навички, що дозволять вам почати власну справу або
//             працювати у найкращих салонах України.
//           </p>
//         </motion.section>

//         <motion.section
//           className={styles.animation}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2>Догляд із задоволенням</h2>
//           <div className={styles.lottieWrapper}>
//             <Lottie animationData={groomAnimation} loop={true} />
//           </div>
//         </motion.section>
//       </main>
//     </>
//   );
// }
