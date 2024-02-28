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
  username: string;
  wpm: number;
  accuracy: number;
  date: string;
}

export const Attempts = () => {
  const { user } = useUserStore();
  const [attempts, setAttempts] = useState<Array<Attempt>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAttempts = async () =>
      await axios.get(`${process.env.NEXT_PUBLIC_API}/attempt/${user!._id}`);

    getAttempts().then(({ data }) => {
      setAttempts(data.races);
      console.log(data);
    });
    setLoading(false);
  }, []);

  return (
    <div className="mt-6">
      {loading && <div>Loading...</div>}
      {!loading && (
        <Table>
          <TableCaption>A list of last races.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20px]">#</TableHead>
              <TableHead className="w-[100px]">Wpm</TableHead>
              <TableHead>Accuracy</TableHead>
              {/* <TableHead>Wpm</TableHead> */}
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attempts
              .map((attempt, id) => (
                <TableRow key={id}>
                  <TableCell className="font-medium">{id + 1}</TableCell>
                  {/* <TableCell className="font-medium"> */}
                  {/* {attempt.username} */}
                  {/* </TableCell> */}
                  {/* <TableCell>{attempt.email}</TableCell> */}
                  <TableCell>{attempt.wpm}</TableCell>
                  <TableCell>{attempt.accuracy}%</TableCell>
                  <TableCell className="text-right">{attempt.date}</TableCell>
                </TableRow>
              ))
              .reverse()}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
