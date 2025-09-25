import { useInView } from "react-intersection-observer";

const CounterDisplay = () => {

    const { ref, inView} = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true
      });

    return (
        <section ref={ref} className=" bg-[#F3FFF8] px-6 xl:px-28 md:px-10 py-20  md:py-20 grid gap-12 md:grid-cols-3 md:gap-16 xl:gap-4 w-screen">
            <article>
                <h2 className="px-10 py-7 text-center">
                    <span className={`flex justify-center tabular-nums text-[#15803D] text-7xl font-bold mb-4 ${inView ? "animate-[counter_3s_ease-out_forwards]":null } [counter-set:_num_var(--num-verification)] before:text-[##15803D] before:content-[counter(num)]` }>
                        <span className="sr-only ">40</span>K+
                    </span>
                    <span className="text-center text-[22.7px]/[40.85px] font-normal text-[#1A2434]">Verifications</span>
                </h2>
            </article>
            <article>
                <h2 className="px-10 py-7 text-center">
                    <span className={`flex justify-center tabular-nums text-[#15803D] text-7xl font-bold mb-4 ${inView ? "animate-[counter_3s_ease-out_forwards]":null } [counter-set:_num_var(--num-license)]  before:content-[counter(num)]`}>
                        <span className="sr-only">40</span>K+
                    </span>
                    <span className="itext-center text-[22.7px]/[40.85px] font-normal text-[#1A2434]">Licenses</span>
                </h2>
            </article>
            <article>
                <h2 className="px-10 py-7 text-center">
                    <span className={`flex justify-center tabular-nums text-[#15803D] text-7xl font-bold mb-4 ${inView ? "animate-[counter_3s_ease-out_forwards]":null } [counter-set:_num_var(--num-users)]  before:content-[counter(num)]`}>
                        <span className="sr-only text-[#22C55E]">40</span>K+
                    </span>
                    <span className="text-center text-[22.7px]/[40.85px]  font-normal text-[#1A2434]">Users</span>
                </h2>
            </article>
    </section>
    )
}

export default CounterDisplay
