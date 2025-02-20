import { createClient } from '@vercel/edge-config';

const edgeConfigId = 'ecfg_ofysvdfvmrcxnsf206ajsr85tms7';
const edgeConfigToken = '4e30be28-e181-4567-a91f-4dfa18855f1c';

const edgeConfig = createClient(`https://edge-config.vercel.com/${edgeConfigId}?token=${edgeConfigToken}`);

const initialData = {
  adminCredentials: {
    username: 'Lucasmelander',
    password: 'Hospohub2024SwedenRock142645'
  },
  workerSignups: [],
  businessSignups: [],
  contactSubmissions: []
};

async function setupEdgeConfig() {
  try {
    // Set each key individually
    for (const [key, value] of Object.entries(initialData)) {
      await edgeConfig.set(key, value);
      console.log(`Successfully set ${key}`);
    }
    console.log('Edge Config setup completed successfully');
  } catch (error) {
    console.error('Error setting up Edge Config:', error);
  }
}

setupEdgeConfig(); 