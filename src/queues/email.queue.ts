import Bull from 'bull';
import emailProcess from '../processes/email.process';

const emailQueue = new Bull('email', {
  redis: process.env.REDIS_URL
} as any);

emailQueue.process(emailProcess);

const sendNewEmail = (data: any) => {
  emailQueue.add(data, {
  });
};

export {
  sendNewEmail
}