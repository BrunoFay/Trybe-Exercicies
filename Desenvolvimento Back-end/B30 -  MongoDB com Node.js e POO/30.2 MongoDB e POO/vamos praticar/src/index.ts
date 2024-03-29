  // src/index.ts
  import FrameController from './controllers/Frame';
  import LensController from './controllers/Lens';
  import Frame from './types/Frame';
  import Lens from './types/Lens';
  import CustomRouter from './routes/Router';
  import App from './server';

  const server = new App();

  const lensController = new LensController();
  const frameController = new FrameController();

  const lensRouter = new CustomRouter<Lens>();
  lensRouter.addRoute(lensController);

  const frameRouter = new CustomRouter<Frame>();
  frameRouter.addRoute(frameController);

  server.addRouter(lensRouter.router);
  server.addRouter(frameRouter.router);

  server.startServer();