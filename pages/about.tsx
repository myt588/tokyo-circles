import Image from '../components/Image'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next'
import { allAuthors } from 'contentlayer/generated'

const DEFAULT_LAYOUT = 'AuthorLayout'

export const getStaticProps = async () => {
  const author = allAuthors.find((p) => p.slug === 'default')
  return { props: { author } }
}

export default function About({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <MDXLayoutRenderer layout={author.layout || DEFAULT_LAYOUT} content={author} />
      <div className="flex justify-center pt-3">
        <div>
          <Image
            alt="小红书二维码"
            src={'/static/images/redbook.jpg'}
            className="object-cover object-center md:h-36 lg:h-48"
            width={200}
            height={200}
          />
          <div className="text-center">关注我们的小红书</div>
        </div>
      </div>
    </>
  )
}
