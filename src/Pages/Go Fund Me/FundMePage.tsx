import { Screen } from "../../app-components/layout/screen";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";

interface Fund {
    id: number;
    fundName: string;
    target: string;
    raised: string;
}

function FundMePage() {
    const fundsData: Fund[] = [
        {
            id: 1,
            fundName: "Building of a social house",
            target: "89000",
            raised: "56000"
        },
        {
            id: 2,
            fundName: "Church Harambee",
            target: "120000",
            raised: "45000"
        },
        {
            id: 3,
            fundName: "RTK Building",
            target: "30000",
            raised: "28000"
        },
        {
            id: 4,
            fundName: "Community Project",
            target: "15000",
            raised: "8000"
        }
    ];

    return (
        <Screen>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">FundMe</h1>
                <p className="text-gray-600 mt-2">Manage your savings goals</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {fundsData.map((fund) => {
                    const targetAmount = Number(fund.target);
                    const raisedAmount = Number(fund.raised);
                    const percentage = (raisedAmount / targetAmount) * 100;
                    const remaining = targetAmount - raisedAmount;

                    return (
                        <Card key={fund.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-lg">{fund.fundName}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Target:</span>
                                        <span className="font-semibold">KSh {targetAmount.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Raised:</span>
                                        <span className="font-semibold text-green-600">KSh {raisedAmount.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Remaining:</span>
                                        <span className="font-semibold text-orange-600">KSh {remaining.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                                        <div 
                                            className="bg-blue-600 h-2 rounded-full transition-all" 
                                            style={{ width: `${Math.min(percentage, 100)}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 text-center mt-1">
                                        {percentage.toFixed(1)}% funded
                                    </p>
                                </div>

                                <Button onClick={() => alert("Coming soon")} className="mt-4 w-full">
                                    Contribute
                                </Button>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </Screen>
    );
}

export default FundMePage;