import CypressImage from '@/public/technology/cypress.svg';
import DockerImage from '@/public/technology/docker.svg';
import ExpressJsImage from '@/public/technology/expressjs.svg';
import GitImage from '@/public/technology/git.svg';
import GoImage from '@/public/technology/go.svg';
import GrafanaImage from '@/public/technology/grafana-svgrepo-com.svg';
import GraphqlImage from '@/public/technology/graphql.svg';
import JavaImage from '@/public/technology/java.svg';
import JsImage from '@/public/technology/js.svg';
import K8Image from '@/public/technology/k8.svg';
import KafkaImage from '@/public/technology/kafka.svg';
import MongoImage from '@/public/technology/mongo.svg';
import NestJsImage from '@/public/technology/nestjs.svg';
import NextJsImage from '@/public/technology/nextjs.svg';
import NodeJsImage from '@/public/technology/nodejs.svg';
import PgImage from '@/public/technology/pg.svg';
import PrometheusImage from '@/public/technology/prometheus.svg';
import RabbitMqImage from '@/public/technology/rabbitmq.svg';
import TestingLibraryImage from '@/public/technology/react-testing-library.png';
import ReactJsImage from '@/public/technology/reactjs.svg';
import RedisImage from '@/public/technology/redis.svg';
import ReduxImage from '@/public/technology/redux.svg';
import SocketIoImage from '@/public/technology/socketIO.svg';
import SwaggerImage from '@/public/technology/swagger.svg';
import TwImage from '@/public/technology/tailwind.svg';
import QueryImage from '@/public/technology/tanstack.png';
import TsImage from '@/public/technology/ts.svg';
import VitestImage from '@/public/technology/vitest.svg';
import WebRtcImage from '@/public/technology/webrtc-svgrepo-com.svg';
import ZustandImage from '@/public/technology/zustand.png';
import Image from 'next/image';

const skills = [
  {
    label: 'JavaScript',
    logo: JsImage
  },
  {
    label: 'TypeScript',
    logo: TsImage
  },
  {
    label: 'Java',
    logo: JavaImage
  },
  {
    label: 'Go',
    logo: GoImage
  },
  {
    label: 'ReactJS',
    logo: ReactJsImage
  },
  {
    label: 'NextJSS',
    logo: NextJsImage
  },
  {
    label: 'Tailwind',
    logo: TwImage
  },
  {
    label: 'Vitest',
    logo: VitestImage
  },
  {
    label: 'Zustand',
    logo: ZustandImage
  },
  {
    label: 'Redux',
    logo: ReduxImage
  },
  {
    label: 'Tanstack Query',
    logo: QueryImage
  },
  {
    label: 'React Testing Library',
    logo: TestingLibraryImage
  },
  {
    label: 'Cypress',
    logo: CypressImage
  },
  {
    label: 'NodeJS',
    logo: NodeJsImage
  },
  {
    label: 'NestJS',
    logo: NestJsImage
  },
  {
    label: 'ExpressJs',
    logo: ExpressJsImage
  },
  {
    label: 'GraphQL',
    logo: GraphqlImage
  },
  {
    label: 'SocketIO',
    logo: SocketIoImage
  },
  {
    label: 'WebRtc',
    logo: WebRtcImage
  },
  {
    label: 'Rabbit MQ',
    logo: RabbitMqImage
  },
  {
    label: 'Kafka',
    logo: KafkaImage
  },
  {
    label: 'Swagger',
    logo: SwaggerImage
  },
  {
    label: 'Prometheus',
    logo: PrometheusImage
  },
  {
    label: 'Grafana',
    logo: GrafanaImage
  },
  {
    label: 'Docker',
    logo: DockerImage
  },
  {
    label: 'Kubernetics',
    logo: K8Image
  },
  {
    label: 'Git',
    logo: GitImage
  },
  {
    label: 'Redis',
    logo: RedisImage
  },
  {
    label: 'PostgreSQL',
    logo: PgImage
  },
  {
    label: 'MongoDB',
    logo: MongoImage
  }
];

const SkillsDisplay = () => {
  return (
    <article id="skills" className="space-y-6">
      <p className="text-center text-5xl font-semibold">
        These Are My <span className="text-blue-800">Skills</span>
      </p>

      <div className="mx-auto flex w-[80%] flex-wrap justify-center">
        {skills.map((item, idx) => (
          <div
            key={idx}
            className="m-4 grid size-24 place-items-center rounded-full bg-white"
          >
            <div key={idx} className="relative size-14">
              <Image
                src={item.logo}
                alt={item.label}
                className="size-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SkillsDisplay;
