import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';


const App = () => {
  const containerfirst = useRef(null);
  const containerSecond = useRef(null);
  const container= useRef(null);
  const { scrollYProgress: scrollYProgressbar } = useScroll({
    target: container})
  const { scrollYProgress: scrollYProgressTarget1 } = useScroll({
    target: containerfirst,
    offset: ['start end', 'end start']

  })
  const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
    target: containerSecond,
    offset: ['start end', 'end start']

  })
  const lg = useTransform(scrollYProgressTarget1, [0, 1], [-150, 150])
  const sm = useTransform(scrollYProgressTarget2, [0, 1], [-50, 250])
  const spring = useSpring(lg, { stiffness: 500, damping: 30 })
  const spring2 = useSpring(sm, { stiffness: 200, damping: 20 })
  const progressbar = useSpring(scrollYProgressbar,{stiffness: 800,damping: 100})

  return (
    <div ref={container}>
      <motion.div  className="h-2  bg-blue-900 sticky top-0 z-50  "
      style={{ scaleX: progressbar,transformOrigin:"left" }}
      ></motion.div>
      <header className=" text-3xl font-bold bg-slate-400 p-5 ">Metro App</header>
      <div ref={containerfirst} className="w-full flex justify-center items-center">
        <motion.div className="w-1/2 " style={{ translateY: spring }}>
          <img src="img.jpg"></img>
        </motion.div>
        <div className="w-1/2 p-15 m-10">
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus mollitia at reprehenderit iure numquam similique nemo earum natus modi fuga commodi ullam quas nesciunt sit voluptate nihil dicta odit officiis aspernatur, dolorem aliquid neque. Commodi vitae accusantium et repudiandae doloribus quasi odio eum recusandae voluptatem nostrum eveniet pariatur consectetur nisi placeat quae dolorum, rerum modi blanditiis possimus? Ratione ex et omnis neque impedit sit ullam eveniet voluptatibus, mollitia animi placeat doloremque voluptatum perspiciatis, ducimus modi odit harum dolorum perferendis cupiditate aliquid molestiae quod possimus maxime nisi. Molestias odit perferendis voluptatem mollitia, voluptate vero error quod quo, vel ullam eum beatae sapiente quibusdam eos, doloremque minima quidem magnam architecto dignissimos. Aspernatur vero molestiae aliquam quaerat necessitatibus odit ad nesciunt corrupti fuga ex earum, nihil, iste rerum, error corporis eius deleniti. Facere ea eum quia! Explicabo, magnam nemo officia eius hic dicta rerum labore voluptatem dolorem unde consequatur eaque provident dolor libero magni doloribus, similique sed non! Quidem magni enim excepturi voluptas dolorum distinctio corrupti libero obcaecati quia omnis tempora quo laborum quae aliquam inventore reprehenderit aliquid, corporis repudiandae consequuntur doloribus eaque quis atque? Aperiam consequatur voluptatem perferendis dignissimos reprehenderit nemo sunt assumenda, laborum magnam ab eveniet! Qui cumque delectus iure pariatur minus, deserunt nihil distinctio consequuntur aut perferendis sunt. Qui distinctio laboriosam praesentium sequi a assumenda placeat nihil, saepe deleniti quasi. Accusamus, sed debitis? Provident ut temporibus ipsa? At tempore et voluptatum dolore suscipit distinctio iusto quod harum, possimus saepe dignissimos necessitatibus nemo magni ullam ducimus quos, ipsam, ipsum obcaecati quas odit facilis perspiciatis expedita aut id. Sunt, doloribus! Ut provident dolorum sit assumenda quam consectetur, est similique beatae illo doloribus! Magnam natus et tempora cupiditate ullam eligendi qui labore similique quis est eaque v.

          </p>
        </div>
      </div>
      <div ref={containerSecond} className="w-full flex justify-center items-center">
      <div className="w-1/2 p-15 m-10">
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus mollitia at reprehenderit iure numquam similique nemo earum natus modi fuga commodi ullam quas nesciunt sit voluptate nihil dicta odit officiis aspernatur, dolorem aliquid neque. Commodi vitae accusantium et repudiandae doloribus quasi odio eum recusandae voluptatem nostrum eveniet pariatur consectetur nisi placeat quae dolorum, rerum modi blanditiis possimus? Ratione ex et omnis neque impedit sit ullam eveniet voluptatibus, mollitia animi placeat doloremque voluptatum perspiciatis, ducimus modi odit harum dolorum perferendis cupiditate aliquid molestiae quod possimus maxime nisi. Molestias odit perferendis voluptatem mollitia, voluptate vero error quod quo, vel ullam eum beatae sapiente quibusdam eos, doloremque minima quidem magnam architecto dignissimos. Aspernatur vero molestiae aliquam quaerat necessitatibus odit ad nesciunt corrupti fuga ex earum, nihil, iste rerum, error corporis eius deleniti. Facere ea eum quia! Explicabo, magnam nemo officia eius hic dicta rerum labore voluptatem dolorem unde consequatur eaque provident dolor libero magni doloribus, similique sed non! Quidem magni enim excepturi voluptas dolorum distinctio corrupti libero obcaecati quia omnis tempora quo laborum quae aliquam inventore reprehenderit aliquid, corporis repudiandae consequuntur doloribus eaque quis atque? Aperiam consequatur voluptatem perferendis dignissimos reprehenderit nemo sunt assumenda, laborum magnam ab eveniet! Qui cumque delectus iure pariatur minus, deserunt nihil distinctio consequuntur aut perferendis sunt. Qui distinctio laboriosam praesentium sequi a assumenda placeat nihil, saepe deleniti quasi. Accusamus, sed debitis? Provident ut temporibus ipsa? At tempore et voluptatum dolore suscipit distinctio iusto quod harum, possimus saepe dignissimos necessitatibus nemo magni ullam ducimus quos, ipsam, ipsum obcaecati quas odit facilis perspiciatis expedita aut id. Sunt, doloribus! Ut provident dolorum sit assumenda quam consectetur, est similique beatae illo doloribus! Magnam natus et tempora cupiditate ullam eligendi qui labore similique quis est eaque v.

          </p>
        </div>

        <motion.div className="w-1/2 " style={{ translateY:spring2  }}>
          <img src="img.jpg"></img>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
