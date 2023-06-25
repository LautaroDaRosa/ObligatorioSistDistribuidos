from datetime import datetime
from pydantic import BaseModel
from typing import Optional


class Medition(BaseModel):
    medition_id: Optional[int]
    sensor_id: int
    date: datetime
    value: float

    def __dict__(self):
        return {
            'medition_id': self.medition_id,
            'sensor_id': self.sensor_id,
            'date': self.date.isoformat(),
            'value': self.value
        }

    def to_json(self):
        return {
            'medition_id': self.medition_id,
            'sensor_id': self.sensor_id,
            'date': self.date.isoformat(),
            'value': self.value
        }
