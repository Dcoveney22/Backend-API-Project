import { Pool } from "pg";

export type Book = {
  title: string;
  author: string;
  published: boolean;
};

class DBService {
  private pool = new Pool({
    connectionString:
      "postgresql://bookshelfDatabase_owner:vgYoSprt29Iy@ep-frosty-sunset-a2rtqo6r.eu-central-1.aws.neon.tech/bookshelfDatabase?sslmode=require",
  });

  public async getBooks(): Promise<Book[]> {
    const result = await this.pool.query("SELECT * FROM book");
    return result.rows;
  }

  public async insertBook(book: Book): Promise<void> {
    await this.pool.query(
      "INSERT INTO book (title, author, published) VALUES ($1, $2, $3)",
      [book.title, book.author, String(book.published)]
    );

    return;
  }
}
export default new DBService();
