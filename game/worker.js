const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');

if (isMainThread) {
	
	const worker =  new Worker('./timeEngine.js', {workerData: {
			ongoingFights : {},
			io : {}		
			}
		 }
	 );
	
	 
} else {
	
  // timeEngine(workerData.ongoingFights, workerData.io);
 // parentPort.postMessage(workerData.num * workerData.num)
}

