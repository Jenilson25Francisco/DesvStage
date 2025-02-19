import Image from 'next/image'

import Gold from '@/assets/medal-gold.svg'
import Silver from '@/assets/medal-silver.svg'
import Cooper from '@/assets/medal-cooper.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicaçoes
      </h2>
      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-3">
          <span className="text-sm text-gray-300 leading-none">
            Jenilson Francisco
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1234
          </span>
          <Image
            src={Gold}
            alt="medalha de ouro"
            width={40}
            height={40}
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-3">
          <span className="text-sm text-gray-300 leading-none">
            Jenilson Francisco
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1234
          </span>
          <Image
            src={Silver}
            alt="medalha de ouro"
            width={40}
            height={40}
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-3">
          <span className="text-sm text-gray-300 leading-none">
            Jenilson Francisco
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1234
          </span>
          <Image
            src={Cooper}
            alt="medalha de ouro"
            width={40}
            height={40}
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
