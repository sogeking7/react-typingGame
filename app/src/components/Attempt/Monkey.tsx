import axios from "axios";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserStore } from "@/stores/user";

interface Attempt {
  name: string;
  wpm: number;
  acc: number;
  // date: string;
}

const MONKEY =
  "https://api.monkeytype.com/leaderboards?language=english&mode=time&mode2=60";

export const Monkey = () => {
  const { user } = useUserStore();
  const [attempts, setAttempts] = useState<Array<Attempt>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAttempts = async () => await axios.get(MONKEY);
    getAttempts().then(({ data }) => {
      setAttempts(data.data);
      console.log(data);
    });
    setLoading(false);
  }, []);

  return (
    <div className="mt-6">
      <div className="flex gap-5">
        <img src="/monkey.png" />
        <h1 className="text-3xl font-semibold text-orange-500">
          MonkeyType Leaderboard API
        </h1>
      </div>
      {loading && <div>Loading...</div>}
      {!loading && (
        <Table>
          <TableCaption>A list of last races.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20px]">#</TableHead>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Wpm</TableHead>
              {/* <TableHead>Wpm</TableHead> */}
              <TableHead className="text-right">Accuracy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attempts.map((attempt, id) => (
              <TableRow key={id}>
                <TableCell className="font-medium">{id + 1}</TableCell>
                <TableCell className="font-medium">{attempt.name}</TableCell>
                {/* <TableCell>{attempt.email}</TableCell> */}
                <TableCell>{attempt.wpm}</TableCell>
                {/* <TableCell>{attempt.acc}%</TableCell> */}
                <TableCell className="text-right">{attempt.acc}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
