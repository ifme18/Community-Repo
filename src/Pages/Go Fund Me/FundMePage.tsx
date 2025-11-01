import { Screen } from "../../app-components/layout/screen";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Target, Wallet, TrendingUp, AlertCircle } from "lucide-react";

interface Fund {
  id: number;
  fundName: string;
  target: string;
  raised: string;
}

function FundMePage() {
  const fundsData: Fund[] = [
    { id: 1, fundName: "Building of a social house", target: "89000", raised: "56000" },
    { id: 2, fundName: "Church Harambee", target: "120000", raised: "45000" },
    { id: 3, fundName: "RTK Building", target: "30000", raised: "28000" },
    { id: 4, fundName: "Community Project", target: "15000", raised: "8000" },
  ];

  return (
    <Screen>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
          <Wallet className="h-8 w-8 mr-3 text-blue-600 dark:text-blue-400" />
          FundMe
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Track community fundraising goals and contribute with ease.
        </p>
      </div>

      {/* Funds Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {fundsData.map((fund) => {
          const target = Number(fund.target);
          const raised = Number(fund.raised);
          const percentage = (raised / target) * 100;
          const remaining = target - raised;

          // Dynamic progress bar colour
          const progressColor = percentage >= 90
            ? "bg-green-500"
            : percentage >= 60
            ? "bg-yellow-500"
            : percentage >= 30
            ? "bg-orange-500"
            : "bg-red-500";

          return (
            <Card
              key={fund.id}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Optional: subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {fund.fundName}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-3 text-sm">
                  {/* Target */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Target className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>Target</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      KSh {target.toLocaleString()}
                    </span>
                  </div>

                  {/* Raised */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      <span>Raised</span>
                    </div>
                    <span className="font-bold">
                      KSh {raised.toLocaleString()}
                    </span>
                  </div>

                  {/* Remaining */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-orange-600 dark:text-orange-400">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      <span>Remaining</span>
                    </div>
                    <span className="font-bold">
                      KSh {remaining.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Progress</span>
                    <span className="font-medium">{percentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`${progressColor} h-full rounded-full transition-all duration-700 ease-out`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                      role="progressbar"
                      aria-valuenow={percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>

                {/* Contribute Button */}
                <Button
                  onClick={() => alert("Contribution feature coming soon!")}
                  className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Contribute Now
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Optional: Empty State or Call-to-action */}
      {fundsData.length === 0 && (
        <div className="text-center py-16">
          <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl w-24 h-24 mx-auto mb-4 flex items-center justify-center">
            <Wallet className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No active funds yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Start a new fundraising goal to get the community involved.
          </p>
        </div>
      )}
    </Screen>
  );
}

export default FundMePage;