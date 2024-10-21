import { freePlan, GrowPlan, scalePlan } from "@/app/configs/constants"
import { ICONS } from "../../utils/icons"
import { Button } from "@nextui-org/react"

const PricingCard = ({ active }: { active: string }) => {
    return (
        <div className="w-full md:flex items-start justify-around py-8">
            {/* free plan */}
            <div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="33"
                    fill="string"
                    className="mb-4"
                >
                    <path
                        fill="#fff"
                        stroke="#3843D0"
                        stroke-width="3"
                        d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
                    ></path>
                </svg>
                <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8 border-b border-[#000]">
                    Launch
                </h5>
                <br />
                <div className="border-b pb-8 border-[#000]">
                    <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
                        $0
                    </h5>
                    <p className="text-lg">
                        No commitment
                    </p>
                </div>
                <div className="pt-5">
                    <p className="text-xl">
                        What&apos;s included...
                    </p>
                </div>
                {
                    freePlan.map((i: PlanType, index: number) => (
                        <div key={index} className="flex w-full items-center py-4">
                            <span className="text-xl">{ICONS.right}</span>
                            <p className="pl-2 text-lg">{i.title}</p>
                        </div>
                    ))
                }
                <br />
                <Button color="primary" className="w-full text-xl !py-6">
                    Get Started
                </Button>
                <p className="pt-1 opacity-[.7] text-center">
                    30-day free trial of Scale features, then free forever
                </p>
            </div>

            {/* grow plan */}
            <div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="33"
                    fill="string"
                    className="mb-4"
                >
                    <path
                        fill="#fff"
                        stroke="#3843D0"
                        stroke-width="3"
                        d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
                    ></path>
                </svg>
                <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8 border-b border-[#000]">
                    GROW
                </h5>
                <br />
                <div className="border-b pb-8 border-black">
                    <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
                        ${active === "Monthly" ? "42" : "49"} /month
                    </h5>
                    <p className="text-lg">
                        Billed {active}
                    </p>
                </div>
                <div className="pt-5">
                    <p className="text-xl">
                        Everything Launch, plus...
                    </p>
                </div>
                {GrowPlan.map((i: PlanType, index: number) => (
                    <div key={index} className="flex w-full items-center py-4">
                        <span className="text-xl">{ICONS.right}</span>
                        <p className="pl-2 text-lg">{i.title}</p>
                    </div>
                ))}
                <br />
                <Button color="primary" className="w-full text-xl !py-6">
                    Get Started
                </Button>
                <p className="pt-1 opacity-[.7] text-center">
                    30-day free trial of Scalefeatures,then $
                    {active === "Monthly" ? "42" : "49"}/mo
                </p>
            </div>

            {/* scale plan */}
            <div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="33"
                    fill="string"
                    className="mb-4"
                >
                    <path
                        fill="#fff"
                        stroke="#3843D0"
                        stroke-width="3"
                        d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
                    ></path>
                </svg>
                <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8 border-b border-[#000]">
                    SCALE
                </h5>
                <br />
                <div className="border-b pb-8 border-black">
                    <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
                        ${active === "Monthly" ? "89" : "99"} /month
                    </h5>
                    <p className="text-lg">
                        Billed {active}
                    </p>
                </div>
                <div className="pt-5">
                    <p className="text-xl">
                        Everything Launch, plus...
                    </p>
                </div>
                {scalePlan.map((i: PlanType, index: number) => (
                    <div key={index} className="flex w-full items-center py-4">
                        <span className="text-xl">{ICONS.right}</span>
                        <p className="pl-2 text-lg">{i.title}</p>
                    </div>
                ))}
                <br />
                <Button color="primary" className="w-full text-xl !py-6">
                    Get Started
                </Button>
                <p className="pt-1 opacity-[.7] text-center">
                    30-day free trial of Scalefeatures,then $
                    {active === "Monthly" ? "89" : "99"}/mo
                </p>
            </div>
        </div>
    )
}

export default PricingCard