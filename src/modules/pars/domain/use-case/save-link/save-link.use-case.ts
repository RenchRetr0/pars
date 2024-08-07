import { Injectable } from '@nestjs/common';
import { ISaveLinkUseCase } from './i-save-link.use-case';
import * as Excel from 'exceljs';

@Injectable()
export class SaveLinkUseCase implements ISaveLinkUseCase {
    async saveToExcel(vipLinks: string[], filename: string): Promise<void> {
        let workbook;
        try {
            workbook = await new Excel.Workbook().xlsx.readFile(filename);
        } catch (error) {
            workbook = new Excel.Workbook();
        }

        const worksheet =
            workbook.getWorksheet('VIP-ссылки') ||
            workbook.addWorksheet('VIP-ссылки');

        vipLinks.forEach((link) => {
            worksheet.addRow([worksheet.rowCount, link]);
        });

        await workbook.xlsx.writeFile(filename);
    }
}
