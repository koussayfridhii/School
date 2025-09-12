import React from 'react';
import Card, { CardBody, CardHeader } from '../components/Card';

const Dashboard = () => {
  return (
    <main className="flex-grow p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">Welcome!</h2>
          </CardHeader>
          <CardBody>
            <p>This is your dashboard. More widgets and information will be added here soon.</p>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default Dashboard;
